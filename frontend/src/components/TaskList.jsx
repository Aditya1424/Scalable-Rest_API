function TaskList({
  tasks,
  onDelete
}) {

  return (

    <div>

      {
        tasks.map(task => (

          <div key={task.id}>

            <h3>
              {task.title}
            </h3>

            <p>
              {task.description}
            </p>

            <p>
              {task.status}
            </p>

            <button
              onClick={() =>
                onDelete(task.id)
              }
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>

  );
}

export default TaskList;