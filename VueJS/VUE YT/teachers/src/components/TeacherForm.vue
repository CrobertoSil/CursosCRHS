<template>
    <section>
        <h3>Añadir Profesor</h3>
        <div><label>Nombre<input type="text" v-model="teacher.teacherName"></label></div>
        <div><label>Apellido<input type="text" v-model="teacher.surname"></label></div>
        <div><label>DNI / NIT<input type="text" v-model="teacher.dni"></label></div>
        <div><label>Materias<input type="text" v-model="subject"></label><button @click="handleSubject">Agregar</button></div>
        <div>
            <ul>
                <li v-for="(elm, index ) in teacher.subjects" :key="index">{{ elm }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc">Documentos Entregados
        <button @click="handleAddTeacher">Agregar</button>
    </section>

    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI / NIF</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No entregada</th>
            </tr>
        </table>
    </section>
</template>

<script lang="ts" setup>
//usando JS
    // import {ref} from 'vue'
    // let teacher = ref({
    //     teacheName: '',
    //     surname: '',
    //     dni: '',
    //     subjects: [],
    //     docs: false
    // })

    //let teachers = ref([])
    //let subject = ref('')

//Usando TS
    import {Ref, ref} from 'vue'

    interface ITeacher{
        teacherName: string,
         surname: string,
         dni: string,
         subjects: Array<string>,
         doc: boolean
    }
    
    let teacher:Ref<ITeacher> = ref({
         teacherName: '',
         surname: '',
         dni: '',
         subjects: [],
         doc: false
     })

     let teachers:Ref<Array<ITeacher>> = ref ([])

     let subject:Ref<string> = ref('')

    //agregarndo los campos al array
    const handleSubject = ()=>{
        teacher.value.subjects.push(subject.value)
        subject.value = ""
    }

    const handleAddTeacher = () =>{
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surname: teacher.value.surname,
            dni : teacher.value.dni,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        })
        teacher.value.teacherName = ""
        teacher.value.surname = ""
        teacher.value.dni = ""
        teacher.value.subjects =[]
        teacher.value.doc = false
    }
 
</script>

<style scoped>
</style>