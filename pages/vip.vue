<template>
  <div class="bg-pruple pt-17.5">
    <div class="px-5">
      <div>
        <h1 class="md:text-15 text-10 font-900 text-center text-yellow">Unidrops VIP会员</h1>
        <p class="md:mb-25 mb-10 md:text-11.25 text-7 font-600 text-center text-yellow">升级你的撸毛硬技能 </p>
      </div>
      <TheVip />
    </div>
    <div class="md:mb-25 mb-10 mt-10 md:mt-30 px-5 md:px-0">
      <h1 class="md:text-15 text-11.25 font-900 text-center text-yellow md:mb-25 mb-10">会员评价</h1>
      <div class="md:w-362 mx-auto bg-white md:px-13.75 md:py-12.5 px-2.5 py-7.5 rounded-2.5 shadow">
        <h2 class="md:text-11.25 text-7 font-900 text-center md:mb-11.25 mb-5">你们赚钱了，我们才有动力</h2>
        <p class="md:mb-8.75 mb-5 md:text-7.5 text-5.5 font-600 text-center">和一群优秀的小伙伴满满变富</p>
        <div class="md:flex items-start justify-between"><img class="md:w-96 w-full"
            src="https://www.unidrops.io/_nuxt/assess_01.4GLIvTy5.png"><img class="md:w-96 w-full"
            src="https://www.unidrops.io/_nuxt/assess_02.ASFIkE9E.png"><img class="md:w-96 w-full"
            src="https://www.unidrops.io/_nuxt/assess_03.mQUwBOul.png"></div>
      </div>
    </div>
    <div class="md:mb-25 mb-10 px-5 md:px-0">
      <h1 class="md:text-15 text-9.5 font-900 text-center text-yellow md:mb-25 mb-10">VIP年度会员4大权益 </h1>
      <div class="md:w-362 mx-auto bg-white md:px-18 md:pt-16.5 md:pb-49.5 px-5 pt-10 pb-5 rounded-2.5 shadow">
        <h2 class="md:text-15 text-8 font-900 text-center mb-11.25">权益1 基础课程全免费</h2>
        <TheGuide />
      </div>
    </div>
    <div class="md:mb-25 mb-10 px-5 md:px-0">
      <div class="md:w-362 mx-auto bg-white md:px-18 md:pt-16.5 px-5.5 pt-9 pb-10 rounded-2.5 shadow">
        <h2 class="md:text-15 text-8 font-900 text-center mb-11.25">权益2 【空投精选】使用权</h2>
        <p class="mb-7.5 md:text-7.5 text-5 font-600 text-center">项目太多，不知道撸哪个？ 跟着攻略走，轻松又高效</p><img
          class="md:w-272.5 w-full block mx-auto" src="https://www.unidrops.io/_nuxt/project.-eOmm1QN.png"
          alt="project">
      </div>
    </div>
    <div class="md:mb-25 mb-10 px-5 md:px-0">
      <div class="md:w-362 mx-auto bg-white md:px-18 md:pt-16.5 px-5 pt-9 md:pb-25 pb-10 rounded-2.5 shadow">
        <h2 class="md:text-15 text-8 font-900 text-center mb-6.25 md:mb-11.25 ">权益3 免费查看【赚钱指南】</h2>
        <p class="mb-7.5 md:mb-17.5  md:text-7.5 text-5 font-600 text-center">聚焦高潜力项目，精准把握大级别的机会</p>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第11期】不同资金的撸毛思路</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第10期】Drift 低磨损交互策略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第9期】Eigenlayer 10倍速度挖分攻略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第8期】Aevo 防女巫思路</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第7期】某顶级跨链桥交互攻略，中文区独家首发！</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第6期】Solana 生态借贷协议3倍速度挖分攻略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第5期】Wormhole 一鱼双吃攻略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第4期】Merlin 打新最佳策略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第3期】Nostr 打新手把手攻略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">【第2期】Hyperliquid 上分详细攻略</div>
        <div class="md:px-38.75 pb-2.5 rounded-2.5 font-900">...</div>
      </div>
    </div>
    <div class="mb-10 px-5 md:px-0">
      <div class="md:w-362 mx-auto bg-white md:px-18 md:pt-16.5 px-5 pt-9 md:pb-25 pb-10 rounded-2.5 shadow">
        <h2 class="md:text-15 text-8 font-900 text-center md:mb-11.25 mb-6.25">权益4 顶级的VIP社区</h2>
        <p class="md:mb-1.75 mb-7.5 md:text-7.5 text-5 font-600 text-center">干货满满，和优秀的人一起成长</p>
        <ul class="md:flex justify-between mb-6.25">
          <li class="md:w-95.5 w-full mb-5 md:mb-0"><img class="md:w-95.5 w-full"
              src="https://www.unidrops.io/_nuxt/slice1.va6dx7OM.png">
            <div class="flex items-center justify-center w-full h-16.5 g3 text-7.5 font-800">挖矿Alpha</div>
          </li>
          <li class="md:w-95.5 w-full mb-5 md:mb-0"><img class="md:w-95.5 w-full"
              src="https://www.unidrops.io/_nuxt/slice2.GoDcKV8k.png">
            <div class="flex items-center justify-center w-full h-16.5 g3 text-7.5 font-800">私有攻略</div>
          </li>
          <li class="md:w-95.5 w-full mb-5 md:mb-0"><img class="md:w-95.5 w-full"
              src="https://www.unidrops.io/_nuxt/slice3.ExYKs7xe.png">
            <div class="flex items-center justify-center w-full h-16.5 g3 text-7.5 font-800">独家首发</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:py-15 py-7.5 px-2.5">
      <div class="text-center">
        <h1 class="md:mb-22.5 mb-12.5 text-11.25 font-900 text-yellow"> 常见问题 </h1>
      </div>
      <div class="md:w-260 mx-auto">
        <TheQuestion />
      </div>
    </div>
  </div>
</template>
<script setup></script>