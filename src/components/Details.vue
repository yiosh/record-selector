<template>
  <td>
    <v-item-group multiple>
    <v-edit-dialog
      :return-value.sync="prop"
      lazy
    >
      {{ prop }}
      <v-text-field
        slot="input"
        v-model="prop"
        @change="onChange"
      ></v-text-field>
    </v-edit-dialog>
    <div class="chips">
      <v-item
        v-for="chip in chipss"
        :key="chip.text"
      >
        <v-chip
          label
          :color="chip.color"
          text-color="white"
          slot-scope="{ active, toggle }"
          :selected="active"
          @click="toggle"
        >
          <v-avatar>
            <v-icon>{{ chip.icon }}</v-icon>
          </v-avatar>
          {{ chip.text }}
        </v-chip>
      </v-item>
    </div>
    </v-item-group>
  </td>
</template>

<script>
import { EventBus } from '../event-bus';
export default {
  props: ["prop", "chips"],
  data() {
    return {
      localProp: this.prop,
      chipss: [
        {
          text:'Chip1',
          color: 'primary',
          icon: 'account_circle'
        },
        {
          text:'Chip2',
          color: 'grey',
          icon: 'explore'
        },
        {
          text:'Chip3',
          color: 'error',
          icon: 'alarm_on'
        }
      ],
      show: true
    }
  },
  methods: {
    onChange() {
      if (typeof this.prop == "number") {
        this.prop = Number(this.prop)
      }
      if (this.prop !== this.localProp) {
        EventBus.$emit('loading')
        this.$emit('update:prop', this.prop)
      }
    }
  }
}
</script>

<style scoped>
  div.v-item-group {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
  }

  .chips {
    display: flex;
  }

  td {
    margin: 50px;
  }
</style>
