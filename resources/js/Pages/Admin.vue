<template>
<v-app>
 
     <br/>
            <v-container>
                   <v-layout>
                    <v-flex>

  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Users</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New User
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="username name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  
                  >
                    <v-text-field
                      v-model="editedItem.Email"
                      label="User Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  
                  >
                    <v-text-field
                      v-model="editedItem.Gender"
                      label="User Gender"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                   
                  >
                    <v-text-field
                      v-model="editedItem.Phone"
                      label="User Phone"
                    ></v-text-field>
                  </v-col>
            
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>


     </v-flex>
      </v-layout>
    </v-container>
</v-app>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'UserName',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'Email' },
        { text: 'Phone', value: 'Phone' },
        { text: 'Gender', value: 'Gender' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        Email: 0,
        Phone: 0,
        Gender: 0,
      },
      defaultItem: {
       name: '',
        Email: 0,
        Phone: 0,
        Gender: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
          name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
               name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                    name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:3,
          },
          {
                    name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                    name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:3,
          },
          {
                    name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                    name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                     name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
          {
                     name: 'Ahmed Ali',
        Email: 'Ahmed@gmail.com',
        Phone:744443323,
        Gender:'maile',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>