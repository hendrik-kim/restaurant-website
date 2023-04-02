<template>
  <v-container>
    <v-card theme="dark" color="black">
      <v-row>
        <v-col cols="12">
          <h1>Contact Us</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" label="Name" required></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
              :rules="emailRules"
            ></v-text-field>
            <v-textarea v-model="message" label="Message" required></v-textarea>
            <v-btn color="amber-darken-4" :disabled="!valid" @click="submit">
              Submit
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" md="12">
          <h2>Our Address</h2>
          <p>
            <v-icon>mdi-map-marker</v-icon>
            123 Street Name<br />
            City, State 12345<br />
            Country
          </p>
          <h2>Phone</h2>
          <p>
            <v-icon>mdi-phone</v-icon>
            +1 (555) 123-4567
          </p>
          <h2>Email</h2>
          <p>
            <v-icon>mdi-email</v-icon>
            info@example.com
          </p>
          <h2>Find Us on Google Maps</h2>
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            style="border: 0"
            :src="`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Space+Needle,Seattle+WA`"
            allowfullscreen
          ></iframe>
        </v-col> </v-row
    ></v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    apiKey: "YOUR_API_KEY",
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Handle form submission logic here
        console.log("Form submitted:", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
      }
    },
  },
};
</script>

<script setup></script>

<style lang="scss" scoped></style>
