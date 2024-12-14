import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [editTaskId, setEditTaskId] = useState("");
  const showEditPop = useRef(null);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add new task
  const addTask = async () => {
    if (!newTaskName.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/addtasks", {
        task_name: newTaskName,
      });
      setNewTaskName("");
      setShowModal(false);
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update task (completed and important)
  const updateTask = async (id, data) => {
    try {
      await axios.put(`http://localhost:5000/api/updatetasks/${id}`, data);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    console.log(tasks);
    console.log(id);
    try {
      await axios.delete(`http://localhost:5000/api/deletetasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle task completed status
  const toggleTaskCompleted = (task) => {
    updateTask(task._id, { completed: !task.completed });
  };

  // Toggle task important status
  const toggleTaskImportant = (task) => {
    updateTask(task._id, { important: !task.important });
  };

  //Toggle edit task

  // console.log(newTaskName)

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4 h-[70%] bg-white rounded-3xl">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">My Tasks</h1>

        {/* Add Task Popover */}
        <div className="relative rounded-full">
          <button
            onClick={() => setShowPopover(!showPopover)}
            className="p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6"
            >
              <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
            </svg>
          </button>

          {showPopover && (
            <div className="absolute border border-pink-500 -left-[45px] bg-white p-2 rounded w-[120px] z-50 shadow-md">
              <button
                className="text-pink-400 "
                onClick={() => setShowModal(true)}
              >
                Add New Task
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Task name"
              className="p-2 border"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Task
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="ml-2 bg-red-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      {editTaskId && (
        <div className="flex gap-3 mt-3">
          <input
            placeholder="Update Task"
            onChange={(e) => setNewTaskName(e.target.value)}
            className="rounded-md pl-2 outline-none bg-[#f9f2fe]"
            type="text"
            name="edit_task"
            id=""
          />
          <button
            onClick={() => {
              updateTask(editTaskId, { task_name: newTaskName });
              showEditPop.current.style.height = "300px";
              setEditTaskId("");
            }}
            className="text-pink-400 border-[2px] border-pink-400 px-2 ]"
          >
            Update
          </button>
        </div>
      )}

      <ul
        ref={showEditPop}
        style={{
          scrollbarWidth: "2px",
          msOverflowStyle: "2px", // This is valid only for Internet Explorer
        }}
        className={`scrollable-container flex flex-col h-[300px]   pb-1 overflow-x-hidden  overflow-y-auto`}
      >
        {tasks.map((task) => (
          <li key={task._id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task)}
                className="mr-2 h-3 w-3 checked:bg-green-500"
              />
              <span className={`mr-2 ${task.completed ? "line-through" : ""}`}>
                {task.task_name}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => toggleTaskImportant(task)}
                className={`p-2 ${task.important ? "text-yellow-500" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={`${task.important ? "#f7c75f" : "white"}`}
                  className="h-4"
                >
                  <path
                    stroke={`${task.important ? "" : "#f7c75f"}`}
                    strokeWidth="2"
                    d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  showEditPop.current.style.height = "263px";
                  setEditTaskId(task._id);
                }}
                className="mr-2 p-2"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="p-2 text-red-500"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
