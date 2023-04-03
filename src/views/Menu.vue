<template>
  <v-container style="height: 100vh">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row justify="center">
              <v-col md="6" cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text class="d-flex justify-center">
                    <div class="text-h6 mb-1">Delivery & Pick Up</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="d-flex justify-center">
                  <v-btn color="amber-darken-4"> Takeout Menu </v-btn>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="d-flex justify-center">
                  <v-btn color="amber-darken-4"> Delivery Menu </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-container>
        <div class="d-flex justify-center" style="margin: auto">
          <v-img src="../assets/order_img.webp"></v-img>
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
