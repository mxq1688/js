<template>
  <div>
    <Head>
      <!-- <Title>{{ route.meta.title }}</Title> -->
      <!-- <Meta property='og:url' :content="`https://www.dupdub.com${route.path}`" />
      <Link rel='canonical' :href="`https://www.dupdub.com${route.path}`" /> -->
    </Head>
    <div style="border: 1px solid #000">
      <NuxtLink to="/">根</NuxtLink> |
      <NuxtLink to="/test">test</NuxtLink> |
      <NuxtLink to="/parent/child1">parent</NuxtLink> |
      <NuxtLink to="/parent-mem/1">parent</NuxtLink> |
      <NuxtLink to="/article">article index</NuxtLink> |
      <NuxtLink to="/article/detail">article detail</NuxtLink> |
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
watch(
  () => route.name,
  () => {
    console.log(123, route.meta.title);
    
    // useHead({
    //   title: route.meta.title as any,
    // })
    useSeoMeta({
      title: route.meta.title as any,
    })
  }
)
useHead({
  meta: [
    { property: 'og:title', content: `应用名称 - ${route.meta.title}` },
    { property: 'og:url', content: `https://www.dupdub.com${route.path}` },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://www.dupdub.com${route.path}`
    }
  ],
})

console.log(route, 'route');

</script>
  