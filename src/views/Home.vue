<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <v-img :max-width="300" src="../assets/main-logo.webp"></v-img>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row justify="center">
              <v-col cols="6">
                <v-card class="mt-2" theme="dark" color="#000">
                  <v-img src="@/assets/opening-hour.webp" height="100px">
                  </v-img>
                </v-card>
              </v-col>
              <v-col md="6" cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text class="d-flex justify-center">
                    <div>
                      <div class="text-h6 mb-1">Opening Hour</div>
                      <div class="text-caption">Mon-Thu 11:00 AM – 9:30 PM</div>
                      <div class="text-caption">
                        Fri-Sun 11:00 AM – 11:30 PM
                      </div>
                    </div>
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

    <!-- Reservation -->
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row justify="center">
              <v-col cols="6">
                <v-card class="mt-2" theme="dark" color="#000">
                  <v-img src="@/assets/reservation.webp" height="100px">
                  </v-img>
                </v-card>
              </v-col>
              <v-col md="6" cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text class="d-flex justify-center">
                    <div>
                      <div class="text-h6 mb-1">Make A Reservation</div>
                      <div class="text-caption">
                        Make a reservation in advance. Please use our online
                      </div>
                      <div class="text-caption">
                        reservations system or call us on 604.742.3311
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn color="lime-darken-2" variant="outlined"
                >Find a Reservation ></v-btn
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- With Us -->
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row justify="center">
              <v-col cols="6">
                <v-card theme="dark" color="#000">
                  <v-img src="@/assets/visit-us.webp" height="150px"> </v-img>
                </v-card>
              </v-col>
              <v-col md="6" cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text class="d-flex justify-center">
                    <div>
                      <div class="text-h6 mb-1">Visit Us</div>
                      <div class="text-caption">
                        1766 West 7th Ave, Vancouver, BC V6J 4Z9 604.742.3311
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn color="lime-darken-2" variant="outlined"
                >Get Dirrection ></v-btn
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- About Us -->
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row>
              <v-col md="12" cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text>
                    <div class="text-h6 mb-1">About DELHI6</div>
                    <v-divider
                      thickness="3"
                      color="#fff"
                      class="mb-1"
                    ></v-divider>
                    <div class="text-caption">
                      Fine Dining Indian Restaurant & Bar
                    </div>
                    <div class="text-caption">
                      Delhi 6 Indian Bistro is a vibrant and modern restaurant
                      that brings the authentic taste of Indian cuisine to the
                      heart of the city. With a warm and inviting atmosphere,
                      Delhi 6 Indian Bistro offers a diverse menu of traditional
                      Indian dishes that are bursting with flavor and made with
                      the freshest ingredients. From fragrant curries to spicy
                      tandoori meats, our chefs use only the finest herbs and
                      spices to create unforgettable dishes that will tantalize
                      your taste buds. Our menu is complemented by a selection
                      of wines, beers, and cocktails, making Delhi 6 Indian
                      Bistro the perfect destination for a casual dinner or a
                      special occasion. Whether you're looking for a romantic
                      night out or a fun gathering with friends and family,
                      Delhi 6 Indian Bistro is the ideal spot for an
                      unforgettable dining experience.
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card theme="dark" color="#000">
                  <v-img src="@/assets/about-us.webp"> </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- Instagram -->
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" max-width="500" theme="dark" color="#000">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-card theme="dark" color="#000">
                  <v-card-text>
                    <div class="text-h6 mb-1">Instagram</div>
                    <v-divider
                      thickness="3"
                      color="#fff"
                      class="mb-1"
                    ></v-divider>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      featuredDishes: [
        {
          name: "Dish 1",
          description: "Dish 1 description",
          image: "https://via.placeholder.com/300",
        },
        {
          name: "Dish 2",
          description: "Dish 2 description",
          image: "https://via.placeholder.com/300",
        },
        {
          name: "Dish 3",
          description: "Dish 3 description",
          image: "https://via.placeholder.com/300",
        },
      ],
    };
  },
};
</script>

<script setup></script>
