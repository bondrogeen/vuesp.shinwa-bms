<script setup lang="ts">
import { VIcon } from 'vuesp-components/components';
const { name } = defineProps<{ name: string }>();
</script>

<template>
  <VIcon name="shut" v-if="name === 'shut'" class="size-full" />
  <VIcon name="plant" v-if="name === 'plant'" class="size-full" />
  <VIcon name="bulb" v-if="name === 'bulb'" class="size-full" />
  <VIcon name="video" v-if="name === 'video'" class="size-full" />
  <VIcon name="windy" v-if="name === 'windy'" class="size-full" />
  <VIcon name="camera" v-if="name === 'camera'" class="size-full" />
  <VIcon name="light" v-if="name === 'light'" class="size-full" />
  <VIcon name="tv" v-if="name === 'tv'" class="size-full" />
  <VIcon name="therm" v-if="name === 'therm'" class="size-full" />
  <VIcon name="store" v-if="name === 'store'" class="size-full" />
  <VIcon name="socket" v-if="name === 'socket'" class="size-full" />
  <VIcon name="plug" v-if="name === 'plug'" class="size-full" />
  <VIcon name="noti" v-if="name === 'noti'" class="size-full" />
  <VIcon name="lock" v-if="name === 'lock'" class="size-full" />
  <VIcon name="chart" v-if="name === 'chart'" class="size-full" />
  <VIcon name="battery" v-if="name === 'battery'" class="size-full" />
  <VIcon name="ram" v-if="name === 'ram'" class="size-full" />
  <VIcon name="map" v-if="name === 'map'" class="size-full" />
  <VIcon name="speaker" v-if="name === 'speaker'" class="size-full" />
  <VIcon name="timer" v-if="name === 'timer'" class="size-full" />
  <VIcon name="snow" v-if="name === 'snow'" class="size-full" />
  <VIcon name="blaze" v-if="name === 'blaze'" class="size-full" />
  <VIcon name="door" v-if="name === 'door'" class="size-full" />
</template>
