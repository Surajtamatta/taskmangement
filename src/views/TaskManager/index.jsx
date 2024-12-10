import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskManager from "@/components/Table"; // Your table component
import StyledModal from "@/components/Modal"; // Your modal component
import { ShowModal } from "@/utils/ModalContext"; // Modal context for global state

const Hero = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const { setModalOpen } = useContext(ShowModal);

  // Fetch data from API
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const formattedTasks = data.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: "Sample Description", // Adding dummy description
        status: task.completed ? "Done" : "To Do",
      }));
      setTasks(formattedTasks);
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = () => {
    if (!newTask.title) {
      toast.error("Title is required!");
      return;
    }
    const id = tasks.length + 1;
    const task = { id, ...newTask };
    setTasks([...tasks, task]);
    toast.success("Task added successfully!");
    setNewTask({ title: "", description: "", status: "To Do" });
  };

  // Update a task inline
  const updateTask = (id, field, value) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, [field]: value } : task
      )
    );
    toast.success("Task updated successfully!");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!");
  };

  // Filter tasks based on status
  const filteredTasks = filter
    ? tasks.filter((task) => task.status === filter)
    : tasks;

  // Table Columns
  const columns = [
    {
      title: "Task ID",
      field: "id",
      width: 90,
      editor: false,
    },
    {
      title: "Title",
      field: "title",
      editor: "input",
      cellEdited: (cell) => {
        const { id, title } = cell.getData();
        updateTask(id, "title", title);
      },
    },
    {
      title: "Description",
      field: "description",
      editor: "input",
      cellEdited: (cell) => {
        const { id, description } = cell.getData();
        updateTask(id, "description", description);
      },
    },
    {
      title: "Status",
      field: "status",
      editor: "select",
      editorParams: { values: ["To Do", "In Progress", "Done"] },
      cellEdited: (cell) => {
        const { id, status } = cell.getData();
        updateTask(id, "status", status);
      },
    },
    {
      title: "Actions",
      formatter: "buttonCross",
      align: "center",
      cellClick: (e, cell) => deleteTask(cell.getRow().getData().id),
    },
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center gap-2 p-6 rounded-lg border shadow">
      <h1 className="text-3xl font-bold mb-4 text-center text-slate-800">
        Task Manager
      </h1>

      {/* Add Task Modal */}
      <StyledModal title="Add New Task">
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <div className="w-full flex-col flex gap-2">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                className="border p-2 flex-1 w-full rounded-md"
              />
            </div>
            <div className="w-full flex-col flex gap-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                placeholder="Description"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
                className="border p-2 flex-1 rounded-md"
              />
            </div>
            <div className="w-full flex-col flex gap-2">
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={newTask.status}
                onChange={(e) =>
                  setNewTask({ ...newTask, status: e.target.value })
                }
                className="border p-2 rounded-md"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={addTask}
              className="hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-400 hover:ring-2 hover:ring-offset-2 hover:ring-slate-500 bg-slate-700 text-white rounded-md px-4 py-1 transition-all ease-out duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </StyledModal>

      {/* Filter Tasks */}
      <div className="w-full flex justify-between items-end sm:items-center">
        <div className="flex gap-2 flex-col sm:flex-row">
          <label className="text-slate-800 text-base">Filter by Status:</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border border-slate-900 p-2 h-8 text-slate-800 rounded-md bg-transparent"
          >
            <option value="">All</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="h-8 hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-400 hover:ring-2 hover:ring-offset-2 hover:ring-slate-500 bg-slate-700 text-white rounded-md px-4 py-1 transition-all ease-out duration-300"
        >
          Add Task
        </button>
      </div>

      {/* Task Table */}
      <TaskManager data={filteredTasks} columns={columns} />

      {/* Task Counters */}
      <div className="flex mt-4">
        <p className="text-sm text-gray-700">
          Total Tasks: {tasks.length} | To Do:{" "}
          {tasks.filter((task) => task.status === "To Do").length} | In Progress:{" "}
          {tasks.filter((task) => task.status === "In Progress").length} | Done:{" "}
          {tasks.filter((task) => task.status === "Done").length}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Hero;
