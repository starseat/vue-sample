<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <a href="#" class="nav-link">
              <p>{{ userId }}</p>
            </a>

          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down class="nav-item"
                     title="5 Notifications"
                     title-classes="nav-link"
                     icon="ti-bell">
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </drop-down>
          <!-- <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li> -->
          <drop-down class="nav-item"
                     title="Settings"
                     title-classes="nav-link"
                     icon="ti-settings">
            <a class="dropdown-item">setting</a>
            <a class="dropdown-item" @click.prevent="onLogOut">LogOut</a>
          </drop-down>
        </ul>
      </div>
    </div></nav>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserInfo"]),
    userId() {
      let viewUserId = '';

      switch(this.getUserInfo.role) {
        case 'admin': {
          viewUserId = '[관리자] ';
        } break;
        case 'manager': {
          viewUserId = '[매니저] ';
        } break;
        default: {
        } break;
      }

      viewUserId += this.getUserInfo.userid;
      return viewUserId;
    },
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    ...mapActions(["logoutAction"]),
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    onLogOut() {
      this.logoutAction();
    }
  }
};
</script>
<style>
</style>
