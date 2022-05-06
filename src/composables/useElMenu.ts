import { Menu } from 'ant-design-vue'
import { Ref, ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

export const useMenuWithRoutr = () => {
  const route = useRoute()
  console.log(route)
  const isCollapse = ref(false)
  const menuRef = ref(null) as Ref<typeof Menu | null>
  const openKeys = ref([''])
  const selectedKeys = ref([''])
  const sRouter = computed(() => {
    const { path, meta } = route
    return { path, meta }
  })
  const onCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
  const onActiveMenu = () => {
    const { path, meta } = sRouter.value
    const { index } = meta
    if (!index) return
    openKeys.value = [(index as string)]
    selectedKeys.value = [path]
  }
  watch(sRouter, () => {
    onActiveMenu()
  })
  onMounted(onActiveMenu)
  return {
    isCollapse,
    onCollapse,
    menuRef,
    onActiveMenu,
    openKeys,
    selectedKeys
  }
}
