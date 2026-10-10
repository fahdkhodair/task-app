
const API_URL = "/api/tasks";

const taskList = document.getElementById("taskList");

// Display error messages
function showError(error) {
    console.error(error);
    alert(error.message || "Something went wrong");
}

// Send request and handle JSON response
async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.message || data.error || `Request failed: ${response.status}`
        );
    }

    return data;
}

// GET: Fetch all tasks
async function getTasks() {
    try {
        const result = await apiRequest(API_URL);

        const tasks = Array.isArray(result)
            ? result
            : result.tasks || result.data;

        if (!Array.isArray(tasks)) {
            throw new Error("Unexpected tasks response format");
        }

        taskList.replaceChildren();

        if (tasks.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No tasks found.";
            taskList.appendChild(li);
            return;
        }

        tasks.forEach((task) => {
            const li = document.createElement("li");

            li.textContent =
                `${task.title} | ${task.description || ""} | ${task.status} | ID: ${task._id}`;

            taskList.appendChild(li);
        });
    } catch (error) {
        showError(error);
    }
}

// POST: Add a new task
document.getElementById("addTaskForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const task = {
        title: formData.get("title").trim(),
        description: formData.get("description").trim(),
        status: formData.get("status"),
        assignedBy: "fahd"
    };

    if (!task.title) {
        alert("Title is required");
        return;
    }

    try {
        await apiRequest(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        alert("Task added successfully!");
        form.reset();
        await getTasks();
    } catch (error) {
        showError(error);
    }
});

// GET: Load tasks using the Get Tasks button
document.getElementById("getTasksForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await getTasks();
});

// DELETE: Remove a task by ID
document.getElementById("deleteTaskForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const id = new FormData(form).get("id").trim();

    if (!id) {
        alert("Please enter a task ID");
        return;
    }

    try {
        await apiRequest(`${API_URL}/${encodeURIComponent(id)}`, {
            method: "DELETE"
        });

        alert("Task deleted successfully!");
        form.reset();
        await getTasks();
    } catch (error) {
        showError(error);
    }
});

// PATCH: Update a task by ID
document.getElementById("updateTaskForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const id = formData.get("id").trim();

    if (!id) {
        alert("Please enter a task ID");
        return;
    }

    const task = {
        title: formData.get("title").trim(),
        description: formData.get("description").trim(),
        status: formData.get("status")
    };

    try {
        await apiRequest(`${API_URL}/${encodeURIComponent(id)}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        alert("Task updated successfully!");
        form.reset();
        await getTasks();
    } catch (error) {
        showError(error);
    }
});

// Load tasks when the page opens
getTasks();

