<template>
  <ElDialog v-model="dialogVisible" width="368px">
    <div class="flex flex-col items-center gap-y-2">
      <Icon name="heroicons:envelope" class="w-8 h-8 text-gray-400" />
      <div class="text-xl font-700 text-slate-600 ">使用邮箱登录/注册</div>
    </div>
    <div class="pt-5 px-6 pb-5">
      <ElForm :model="form" :rules="rules" ref="formRef" label-position="top">
        <ElFormItem label="邮箱" prop="email">
          <ElInput v-model="form.email" placeholder="请输入邮箱" />
        </ElFormItem>
        <ElFormItem label="验证码" prop="code">
          <ElInput v-model="form.code" placeholder="请输入验证码" />
          <div class="absolute -top-10 right-0 text-blue text-3 cursor-pointer underline select-none" @click="onSend">
            {{ count ?
              `${count}后重新发送` : '发送验证码' }} </div>
        </ElFormItem>
      </ElForm>
      <div class="pt-5">
        <TheButton class="w-full" @click="login">登录 / 注册</TheButton>
      </div>
    </div>
  </ElDialog>
</template>
<script setup>
// import { useAuth } from '@sidebase/nuxt-auth';
const dialogVisible = ref(false)

const form = reactive({
  email: '',
  code: ''
})
const rules = {
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}


const formRef = ref(null)


const { fullPath } = useRoute()
const { signIn } = useAuth()

const login = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      signIn(form, {
        callbackUrl: fullPath,
        external: true
      }).then(() => {
      })
    }
  })
}
const timer = ref(null)
const count = ref(0)
const onSend = () => {
  if (count.value) {
    return
  }
  $fetch('/api/sendEmail', {
    method: 'POST',
    body: JSON.stringify({ email: form.email })
  }).then(res => {
    if (res.code === 200) {
      ElMessage.success('发送成功')
      count.value = 60
      timer.value = setInterval(() => {
        count.value--
        if (count.value <= 0) {
          clearInterval(timer.value)
        }
      }, 1000)
    } else {
      ElMessage.error(res.message)
    }
  })
}

const open = () => {
  dialogVisible.value = true
}
const close = () => {
  dialogVisible.value = false
}

defineExpose({
  open,
  close
})
</script>