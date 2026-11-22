<template>
  <div>
    <nav class="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/employees">Employees</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.navigation a {
  color: #2563eb;
  text-decoration: none;
}

.navigation a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
