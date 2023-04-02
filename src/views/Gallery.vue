<script setup></script>
<template>
  <v-container>
    <v-row>
      <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
        <v-col :cols="image.cols">
          <v-img
            :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
            cover
            height="100%"
          ></v-img>
        </v-col>

        <v-col v-if="image.children" cols="6" class="d-flex flex-column">
          <v-row>
            <v-col
              v-for="(children, childIdx) in image.children"
              :key="childIdx"
              :cols="children.cols"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${
                  children.cols + childIdx
                }`"
                cover
                height="100%"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
    <v-row v-if="showLoadMoreButton">
      <v-col class="text-center">
        <v-btn color="primary" @click="loadMoreImages">Load More</v-btn>
      </v-col>
    </v-row></v-container
  >
</template>

<script>
export default {
  data: () => ({
    imageLayout: [
      { cols: 4 },
      {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }],
      },
      { cols: 6 },
      { cols: 3 },
      { cols: 9 },
      { cols: 4 },
      { cols: 8 },
    ],
  }),
  methods: {
    loadMoreImages() {
      this.imagesToShow += 12;
    },
  },
};
</script>

<style lang="scss" scoped></style>
