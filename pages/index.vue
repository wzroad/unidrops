<template>
  <div class="g ">
    <div class="px-5 py-10 md:px-0 md:pt-35 md:pb-20  md:w-300 mx-auto">
      <div class="text-9 font-bold text-center mb-6">掘金 Web3 , 就来 Unidrops</div>
      <div class="text-sm mb-18 text-center">系统化学习区块链空投知识, 提升认知, 把握赚钱机会</div>
      <div class="flex flex-col gap-y-5 md:flex-row md:gap-x-10">
        <div class="text-center bg-white p-7 md:p-13 c-shadow rounded-2 md:flex-1 " v-for="item in list" :key="item.id">
          <div class="text-3xl font-bold mb-2.5 md:mb-7">{{ item.title }}</div>
          <div class="text-sm mb-5 md:h-55 text-left">{{ item.desc }}</div>
          <CButton class="md:py-4 md:px-9 md:text-2xl">{{ item.btnText }}</CButton>
        </div>
      </div>
    </div>
  </div>
  <div class="px-5 py-10 md:px-0 mx-auto md:w-300 md:flex md:items-center md:justify-between md:py-50">
    <img class="max-w-full md:w-139" src="~/assets/images/iphone.png" alt="">
    <div class="md:w-113">
      <div class="text-9 font-bold text-center md:text-left mb-6 pt-20 md:pt-0">第1个10万美金从撸空投开始</div>
      <div class="text-sm mb-2 text-center md:text-left"> 身价数亿美元的神鱼大佬给10万美金一下的新手的建议：撸空投！还是撸空投！ </div>
      <div class="text-sm mb-15 text-center md:text-left"> 而凯文也是在2020年开始刷空投，至今取得了不错的回报，而部分圈内的空投大佬的收益更是夸张，少数人甚至直接财务自由了。
      </div>
      <CButton class="w-full md:w-auto md:px-9 md:text-2xl">立即开始</CButton>
    </div>
  </div>
  <div class="g1">
    <div class=" px-5 py-10 md:py-30 md:px-0 md:w-300 mx-auto">
      <div class="text-9 font-bold text-center mb-6">系统化学习 Web3 技能</div>
      <div class="text-sm mb-18 text-center">稳扎稳打，才能走的远。全方位系统化培训，助您在Web3的浪潮中快速起飞。</div>
      <TheGuide showBottom />
    </div>
  </div>
  <div class="px-5 py-10 md:py-30 md:px-0 md:w-300 mx-auto">
    <div class="text-9 font-bold text-center mb-6">我们提供哪些赚钱信息？</div>
    <div class="text-sm mb-15 text-center"> Web3 信息差等于赚钱机会，在这个行业里，你永远可以通过信息差赚钱。 </div>
    <div class="grid grid-cols-2 grid-rows-2  gap-x-8 gap-y-7 md:flex">
      <div class="text-center" v-for="item in list2" :key="item.id">
        <img class="w-15 md:w-25 mb-5" :src="item.image" alt="">
        <div class="text-3xl font-bold mb-5 ">{{ item.title }}</div>
        <div class="text-sm text-left">{{ item.desc }}</div>
      </div>
    </div>
  </div>
  <div class="g2">
    <div class=" px-5 py-10 md:py-30 md:px-0 md:w-300 mx-auto">
      <div class="text-9 font-bold text-center mb-6">我们的成果如何？</div>
      <div class="text-sm mb-8 text-center">自开启社群以来，群友单月最少收益超过2000美金，最多逼近 60000美金。</div>
      <div class="flex flex-col gap-y-5 md:flex-row bg-white rounded-2">
        <ul class="bg-white p-8 rounded-2.5">
          <li class="text-sm font-400 mb-4 list-disc">Nostr 打新实战10天实现150%的盈利，收益超过25000美金</li>
          <li class="text-sm font-400 mb-4 list-disc">Merlin 打新按头提示群友，单号收益超过1000刀，社区有人高达50个号，单期获利超过50000美金</li>
          <li class="text-sm font-400 mb-4 list-disc">Eigenlayer 最早提出10倍速度挖矿大法，领先市场平均水平 900%</li>
          <li class="text-sm font-400 mb-4 list-disc">去年10月开始布局衍生品赛道，2024年2月份衍生品赛道爆发，提前市场4个月</li>
          <li class="text-sm font-400 mb-4 list-disc">在 Wormhole 快照前1个月发推提示，跟上的用户人均撸到 3000 - 7000刀，成本不到20刀</li>
          <li class="text-sm font-400 mb-4 list-disc">Bounce 连续多期参与打新，最高单期收益率超过90%，跟上的用户目前总收益超过 200%</li>
          <li class="text-sm font-400 mb-4 list-disc">在 Starknet
            负面消息不断时，提示小伙伴不要慌，继续加号，2月后快照，跟上的老铁普遍收益在1万刀至10万刀之间</li>
          <li class="text-sm font-400 mb-4 list-disc">还有很多...</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="px-5 py-10 md:py-30 md:px-0 md:w-300 mx-auto">
    <div class="text-9 font-bold text-center mb-6 md:mb-10">开通VIP会员</div>
    <TheVip />
  </div>
  <div class="px-5 py-10 md:py-30 md:px-0 md:w-300 mx-auto">
    <div class="text-9 font-bold text-center mb-6  md:mb-20">常见问题</div>
    <div class="">
      <TheQuestion />
    </div>
  </div>
</template>
<script setup>
import icon_01 from '~/assets/images/icon_01.svg'
import icon_02 from '~/assets/images/icon_02.svg'
import icon_03 from '~/assets/images/icon_03.svg'
import icon_04 from '~/assets/images/icon_04.svg'
const list = ref([
  { id: 1, title: '我是新手', desc: '0基础入门区块链赚钱实战，28节课全方位系统化学习撸空投技能，帮助您赚取第一桶金', btnText: '立即学习' },
  { id: 2, title: '我有基础', desc: '我们为您精选了优质的空投项目，量身定制最佳的撸空投策略。在项目大热之前提前布局 Alpha，助您成为项目OG，告诉你撸什么，怎么撸，什么时候重仓，什么时候离场。', btnText: '立即赚钱' },
  { id: 3, title: '我想进群', desc: '与顶级空投猎人凯文一对一交流，和一流的头部玩家成为战友。每日分享撸毛、套利、打新、挖矿等赚钱干货，优质项目反复提醒，助您快速从Web3中赚取收益', btnText: '立即进群' },
])
const list2 = ref([
  { id: 1, title: '空投', desc: '精选优质的空投项目，提前市场布局高潜力项目。', image: icon_01, },
  { id: 2, title: '打新', desc: '发现市场中的 IEO/ IDO带来的赚钱机会。', image: icon_02, },
  { id: 3, title: '挖矿', desc: '动态识别不同公链带来的挖矿机会。', image: icon_03, },
  { id: 3, title: '套利', desc: '分享由于市场波动、热点切换等带来的套利机会。', image: icon_04, },
])
</script>
<style></style>