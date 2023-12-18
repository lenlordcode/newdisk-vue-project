<template>
  <div class="profile__container">
      <template v-if="modalAdd">
          <el-modal :title="'Добавление заметки'" @closeModal="closeModal">
              <el-input v-model="noteTitle"
                         :placeholder="'Введите название'"
                         :iconRight="false"
                         :valdation="false"
                         :textValue="'Заголовок'">

              </el-input>
              <el-textarea v-model="noteContent"
                             :placeholder="'Введите текст'"
                             :valdation="false"
                             :textValue="'Текст заметки'"
              ></el-textarea>
              <el-button class="profile__modal_add __color_white" :icon="false" :type="'text+icon'" @click="addNote">Добавить</el-button>
          </el-modal>
      </template>
      <div class="profile__list">
          <el-note v-for="(item, key) in listNote" :key="key" :title="item.title"
                    :content="item.content" :id="item.id" @button-clicked="deleteNote"/>
      </div>
      <el-button class="profile__add" :icon="true" :size="'small'" :img="'add'" @click="modalAdd = true"/>
  </div>
</template>

<style scoped>
    .profile__container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profile__list{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        padding-top: 40px;
    }

    .profile__add{
        position: absolute;
        bottom: 40px;
        right: 20px;
    }

    .profile__modal_add{
        display: flex;
        margin-left: auto;
        justify-content: left;
        margin-top: 40px;
    }

    @media screen and (max-width: 1366px){
        .profile__list{
            display: grid;
            grid-template-columns: repeat(3, 2fr);
            grid-template-rows: auto;
            padding-top: 40px;
        }

    }

    @media screen and (max-width: 768px){
        .profile__list{
            display: inline-block;
            padding-top: 40px;
        }
    }

    @media screen and (max-width: 360px){
        .profile__list{
            display: inline-block;
        }
        .profile__modal_add{
            flex: 1;
            margin-top: 28px;
        }
    }
</style>

<script>
import {defineComponent} from 'vue'
import {api} from "@/api";

export default defineComponent({
    name: "ProfilePage",
    data(){
        return{
            modalAdd:false,
            noteTitle:'',
            noteContent:'',
            listNote :[],
        }
    },
    computed:{

    },
    mounted(){
        this.getNotes();
    },
    methods:{
        async getNotes(){
            const success = await api.note.getNotes();
            if (success){
                this.listNote = success;
            }
        },
        async addNote (){
            const success = await api.note.addNote(this.noteTitle, this.noteContent);
            this.validationTextArea = false;
            if (success === true){
                await this.getNotes();
                this.closeModal();
            } else if (success === 401) {
                alert ('Требуется авторизация');
                await this.$router.push('/');
            } else{
                alert(success);
            }
        },

        async deleteNote(id){
            const success = await api.note.deleteNote(id);
            if (success === true){
                await this.getNotes();
            }else if (success === 401) {
                alert ('Требуется авторизация');
                await this.$router.push('/');
            } else{
                alert(success);
            }
        },
        closeModal(){
            this.modalAdd = false;
        }
    }
})
</script>