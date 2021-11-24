import {ref, onMounted, computed} from 'vue';
import { fetchUserRepositories } from '@/api/repositories'

const useUser = () => {
    const userData = ref([])
    const search = ref('')

   const getUserRepositories = async () => {
     userData.value = await fetchUserRepositories()
   }

   const usersMatchingSearchQuery = computed(() => {
      return userData.value.filter(item => { return item.name.includes(search.value) })
   });
   
   onMounted(getUserRepositories)

   return {
    userData,
    usersMatchingSearchQuery,
    search
    }
}

export default useUser;