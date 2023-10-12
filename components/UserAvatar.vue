<template>
  <div>
    <v-avatar id="menu-activator"
      image="https://sun9-34.userapi.com/impg/iig7aIh697BZw1VwHcjw_rvEqH9TrFWPd5Yl2A/SrL2e6CE8pw.jpg?size=2400x1350&quality=95&sign=059690a51228f43c94df2f193fb7b88c&type=album"
      size="50"></v-avatar>
    <v-menu location="start" activator="#menu-activator">

      <v-list class="mr-1 mt-10 py-0">
        <div class="flex flex-col  py-4 pl-6 pr-10">
          <span class="text-oxford text-lg font-semibold">{{ userStore.user?.name }}</span>
          <span class="text-slate-400  text-base leading-normal">{{ userStore.user?.email }}</span>
        </div>
        <div class="flex bg-slate-300 h-[1px] rounded-full w-full"></div>
        <v-list-item density="compact" color="#1D293F" value="Settings">
          <v-list-item-title @click="() => router.push(`/my-toures`)"
            class="flex text-oxford items-center gap-2 py-2 pl-1 pr-10"><v-icon size="20">mdi-map-legend</v-icon>My
            Toures</v-list-item-title>
        </v-list-item>
        <v-list-item density="compact" color="#28B0A6" value="Settings">
          <v-list-item-title @click="() => router.push('/settings')"
            class="flex text-oxford items-center gap-2 py-2 pl-1 pr-10"><v-icon
              size="20">mdi-cog</v-icon>Settings</v-list-item-title>
        </v-list-item>
        <div class="flex bg-slate-300 h-[1px] rounded-full w-full"></div>
        <v-list-item density="compact" color="#28B0A6" @click="() => signOut()" value="Signout">
          <v-list-item-title class="flex text-seagreen items-center gap-2 py-2 pl-1 pr-10"><v-icon
              size="20">mdi-logout</v-icon>Sign
            out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/hooks/use-toast';
import { useUserStore } from '~/stores/UserStore';

const { toast } = useToast()
const router = useRouter()
const userStore = useUserStore()

const signOut = () => {
  toast.success({ message: 'Signed out successfully' })
  userStore.signOut()
}

</script>

<style scoped></style>