<template>
    <AppHeaderDropdown right no-caret>
        <template slot="header">
            <img
                    src="img/avatars/6.jpg"
                    class="img-avatar"
                    alt="admin@bootstrapmaster.com" />
        </template>\
        <template slot="dropdown">
            <b-dropdown-item><i class="fa fa-shield" /> My Info</b-dropdown-item>
            <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
        </template>
    </AppHeaderDropdown>
</template>

<script>
  import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
  export default {
    name: 'DefaultHeaderDropdownAccnt',
    components: {
      AppHeaderDropdown
    },
    data: () => {
      return {

      }
    }
  }
</script>
