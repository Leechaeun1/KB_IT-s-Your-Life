<template>
  <nav
    class="navbar navbar-expand-sm justify-content-center bg-dark navbar-dark"
  >
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products"> 상품목록</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart"> 장바구니</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <br />
</template>
<style scoped></style>
