<template>
  <div class="md:flex md:w-372.5 mx-auto md:px-6.25 p-4 md:!h-[calc(100vh-67px)] !h-auto relative">
    <ul class="md:flex md:flex-col md:gap-y-2.5 hidden max-w-75 pr-2.5 py-11.25 overflow-y-auto">
      <li class="rounded-2.5 p-3.5 cursor-pointer " :class="{ 'bg-purple1': activeId === 0 }" @click="onDetail()"> 课程简介
      </li>
      <li v-for="item in menu" :key="item.id" @click="onDetail(item)"
        class="rounded-2.5 p-3.5 cursor-pointer indent-3  flex" :class="{ 'bg-purple1': activeId === item.part }">
        <span>{{ item.part }}.&nbsp;</span><span>{{ item.title }}</span>
      </li>
    </ul>
    <div v-show="popup">
      <div class="fixed z-31 top-0 left-0 right-0 bottom-0 bg-black bg-op-50" @click="popup = false"></div>
      <div class="fixed z-31 top-0 left-0 right-22 bottom-0 bg-white  pt-16">
        <ul class="flex flex-col gap-y-2.5 hidden max-w-75 pr-2.5 py-11.25 overflow-y-auto">
          <li class="rounded-2.5 p-3.5 cursor-pointer " :class="{ 'bg-purple1': activeId === 0 }" @click="onDetail()">
            课程简介
          </li>
          <li v-for="item in menu" :key="item.id" @click="onDetail(item)"
            class="rounded-2.5 p-3.5 cursor-pointer indent-3 line-clamp-1 flex"
            :class="{ 'bg-purple1': activeId === item.part }">
            <span>{{ item.part }}.&nbsp;</span><span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:hidden inline-block sticky top-17 shadow bg-white rounded-1/2 p-2.5 mb-2.5" @click="popup = true"><i
        class="el-icon !block" style="font-size: 26px; --color: #7310FF;"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024">
          <path fill="currentColor"
            d="M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352 192 160-192 128z"></path>
        </svg></i></div>
    <div class="md:py-12.5 md:pl-12.5 md:pr-3.75 md:overflow-y-auto">
      <CollegeBaseInfo v-if="query.id == 1 && !content" />
      <CollegeAdvancedInfo v-if="query.id == 2 && !content" />
      <div class="rich-text md:w-241.25 bg-white md:px-16.5 md:py-10 p-5 rounded-2.5 shadow" v-if="content">
        <h1 class="text-center pb-4">{{ title }}</h1>
        <MDC :value="content" />
      </div>
    </div>
  </div>
  <DialogBuyCollege ref="dialogBuyCollege" />
  <DialogTheLogin ref="dialogTheLogin" />
</template>
<script setup>
import { useUserStore } from '~/store/user.store';

const dialogBuyCollege = ref()
const dialogTheLogin = ref()
const { userInfo } = useUserStore()
const open = () => {
  if (!userInfo.value || !userInfo.value.id) {
    dialogTheLogin.value.open()
  } else {
    dialogBuyCollege.value.open()
  }
}

const popup = ref(false)

const menu = ref([])
const { query } = useRoute()
const { data } = await useFetch('/api/course/list', { query })
menu.value = data.value.data

const content = ref('')
const title = ref('')
const activeId = ref(0)
const onDetail = async (item) => {
  activeId.value = item ? item.part : 0
  if (activeId.value === 0) {
    content.value = ''
    title.value = ''
    popup.value = false
    return
  }
  const { data } = await $fetch(`/api/course/detail?courseId=${query.id}&part=${item.part}`)

  popup.value = false
  content.value = data.content
  title.value = item.title
}

</script>