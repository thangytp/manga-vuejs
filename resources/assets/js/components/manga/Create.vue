<template>
  <div>
    <h1>Create An Manga</h1>
    <form v-on:submit.prevent="addManga">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="manga.name">
              
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Slug:</label>
              <input type="text" class="form-control" v-model="manga.slug">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Other Name:</label>
              <input type="text" class="form-control" v-model="manga.other_name">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Status:</label>
              <input type="text" class="form-control col-md-6" v-model="manga.status" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control col-md-6" v-model="manga.description" ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Cover:</label>
              <input type="text" class="form-control col-md-6" v-model="manga.cover" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <button class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          manga:{}
        }
    },
    methods: {
      addManga(){
        // let uri = '/mangas';
        this.axios.post(uri, this.manga).then((response) => {
            console.log('ok');
        })
    }
  }
}
</script>