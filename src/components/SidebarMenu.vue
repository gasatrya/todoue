<template>
  <aside class="drawer drawer-mobile">
    <input type="checkbox" id="sidebar" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      Test
    </div>
    <div class="drawer-side">
      <label for="sidebar" class="drawer-overlay"></label>

      <div class="overflow-y-auto w-56 bg-nord1">
        <ul class="menu menu--main p-4">
          <li>
            <a href="#">
              <img src="../assets/icons/icon-calendar.svg" alt="Today's Tasks" />
              Today
            </a>
          </li>
          <li>
            <a>
              <img src="../assets/icons/icon-tasks.svg" alt="All Tasks" />
              All Tasks
            </a>
          </li>
        </ul>

        <ul class="menu p-4 pt-0">
          <li></li>
          <li class="menu-title">
            <span>Tags</span>
          </li>
          <li><a>#work</a></li>
          <li><a>#personal</a></li>
          <li><a>#study</a></li>
          <li><a>#family</a></li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.menu {
  &--main a {
    @apply text-lg font-bold;
  }

  a {
    @apply py-2;
  }
}
</style>
