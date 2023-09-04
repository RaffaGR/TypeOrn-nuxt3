<template>
  <div class="w-full px-2">
    <!-- Input de busca -->
    <div class="w-full p-4 border b-gray-200 flex items-center justify-between">
      <span class="text-xl font-semibold"> user on</span>
      <input
        v-model="searchTerm"
        @input="delaySearch"
        class="px-2 py-1 border rounded"
        placeholder="Buscar..."
      />
      <!-- Adicione o botão de adicionar aqui -->
      <div class="flex">
        <input
          v-model="newUserInput"
          class="px-2 py-1 border rounded"
          placeholder="Novo Usuário..."
        />
        <button @click="adicionarUsuario" class="text-green-500 hover:text-green-700">
          Adicionar
        </button>
      </div>
    </div>
    <!-- Ajuste Botão de Ação aqui, botão de editar e excluir usuarios -->
    <div class="mt-4">
      <ul>
        <li
          v-for="result in searchResults"
          :key="result.id"
          class="p-2 border-b border-gray-300 flex justify-between items-center"
        >
          <span class="mr-2">{{ result.first_name }}</span>
          <div class="flex">
            <button
              @click="editUsuario(result)"
              class="text-blue-500 hover:text-blue-700 mr-2"
            >
              Edit
            </button>
            <button
              @click="excluirUsuario(result)"
              class="text-red-500 hover:text-red-700"
            >
              Excluir
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from '@/node_modules/vue';

export default {
  setup() {
    const searchTerm = ref('');
    const apiData = ref([]);
    const searchTimeout = ref(null);
    const newUserInput = ref('');

    const searchResults = computed(() => {
      if (!searchTerm.value) return apiData.value;
      return apiData.value.filter(result =>
        result.first_name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const delaySearch = () => {
      clearTimeout(searchTimeout.value);
      searchTimeout.value = setTimeout(search, 500);
    };

    const search = async () => {

    };

    const adicionarUsuario = () => {
      if (!newUserInput.value) return;
      const newUsuario = { id: apiData.value.length + 1, first_name: newUserInput.value };
      apiData.value.push(newUsuario);
      newUserInput.value = ''; 
    };

    const editUsuario = user => {
      console.log(`Editando ${user.first_name}`);
    };

    const excluirUsuario = user => {
      console.log(`Excluindo ${user.first_name}`);
      apiData.value = apiData.value.filter(item => item !== user);
    };

    onMounted(() => {
      
    });

    return {
      searchTerm,
      apiData,
      searchResults,
      delaySearch,
      adicionarUsuario,
      editUsuario,
      excluirUsuario,
      newUserInput,
    };
  },
};
</script>
