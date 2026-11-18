<script setup lang="ts">
import { ref, computed } from "vue";
const employeeName = ref("");
const employeeDepartment = ref("");
const searchQuery = ref("");
interface Employee {
  id: number;
  name: string;
  department: string;
}

const employees = ref<Employee[]>([
  { id: 1, name: "Rahul", department: "IT" },
  { id: 2, name: "Priya", department: "HR" },
  { id: 3, name: "Amit", department: "Finance" },
]);

function addEmployee() {
  if (!employeeName.value.trim() || !employeeDepartment.value.trim()) {
    return;
  }

  employees.value.push({
    id: Math.max(0, ...employees.value.map((emp) => emp.id)) + 1,
    name: employeeName.value,
    department: employeeDepartment.value,
  });

  employeeName.value = "";
  employeeDepartment.value = "";
}
const filteredEmployees = computed(() => {
  return employees.value.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>

<template>
  <div class="employee-container">
    <h1>Employee Management</h1>
    <div class="employee-form">
      <h2>Add Employee</h2>

      <div class="form-group">
        <input v-model="employeeName" placeholder="Employee Name" />

        <input v-model="employeeDepartment" placeholder="Department" />
      </div>

      <button @click="addEmployee">Add Employee</button>
    </div>

    <div class="employee-list">
      <h2>Employee List</h2>

      <input
        v-model="searchQuery"
        placeholder="Search employees..."
        class="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="employee in filteredEmployees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.department }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="filteredEmployees.length === 0">No employees found.</p>
    </div>
  </div>
</template>
<style scoped>
.employee-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
}

h1 {
  font-size: 32px;
  margin-bottom: 30px;
}
.employee-form {
  background: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.form-group input {
  flex: 1;
  min-width: 0;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

.employee-form button {
  background: #2563eb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.employee-form button:hover {
  background: #1d4ed8;
}

@media (max-width: 600px) {
  .form-group {
    flex-direction: column;
  }
}
.employee-list {
  margin-top: 30px;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background: #f1f5f9;
}

tbody tr:hover {
  background: #f8fafc;
}
</style>
