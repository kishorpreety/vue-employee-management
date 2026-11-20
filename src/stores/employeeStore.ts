import { defineStore } from "pinia";
import { ref } from "vue";

interface Employee {
  id: string;
  name: string;
  department: string;
}

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref<Employee[]>([]);

  async function fetchEmployees() {
    try {
      const response = await fetch("http://localhost:3000/employees");

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data: Employee[] = await response.json();

      employees.value = data;
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

  async function addEmployee(name: string, department: string) {
    try {
      const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          department,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      const newEmployee: Employee = await response.json();

      employees.value.push(newEmployee);
    } catch (error) {
      console.error("Error adding employee:", error);
      throw error;
    }
  }

  return {
    employees,
    fetchEmployees,
    addEmployee,
  };
});
