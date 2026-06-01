import {
  useEffect,
  useState
} from "react";

import api from "../api/axios";

import TaskForm
from "../components/TaskForm";

import TaskList
from "../components/TaskList";

function Dashboard() {

  const [tasks,setTasks] =
  useState([]);

  const loadTasks =
  async () => {

    const response =
      await api.get("/tasks");

    setTasks(
      response.data.data ||
      response.data
    );
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask =
  async (task) => {

    await api.post(
      "/tasks",
      task
    );

    loadTasks();
  };

  const deleteTask =
  async (id) => {

    await api.delete(
      `/tasks/${id}`
    );

    loadTasks();
  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href="/";
  };

  return (

    <div>

      <h1>
        Dashboard
      </h1>

      <button
        onClick={logout}
      >
        Logout
      </button>

      <TaskForm
        onCreate={createTask}
      />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
      />

    </div>

  );
}

export default Dashboard;