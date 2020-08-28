<template>
  <div>

    <!-- login -->
    <div class="container">
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col-6">
          <div class="card p-4">
            <FormulateForm
              class="p4"
              v-model="formValues"
              @submit="login"
            >
              <h2 class="card-title text-center">Log In</h2>
              <FormulateInput
                name="email"
                type="email"
                label="Email address"
                placeholder="Email address"
                validation="required|email"
                input-class="form-control"
                label-class="form-label"
                outer-class="mb-3"
                errors-class="list-group list-group-flush mb-3 text-muted"
                error-class="list-group-item text-danger small "
              />
              <FormulateInput
                name="password"
                type="password"
                label="Password"
                placeholder="Your password"
                validation="required"
                input-class="form-control"
                label-class="form-label"
                outer-class="mb-3"
                errors-class="list-group list-group-flush mb-2 text-muted"
                error-class="list-group-item text-danger small "
                class="col"
              />
              <FormulateInput
                name="password_confirm"
                type="password"
                label="Confirm your password"
                placeholder="Confirm password"
                validation="required|confirm"
                validation-name="Confirmation"
                input-class="form-control"
                label-class="form-label"
                outer-class="mb-3"
                errors-class="list-group list-group-flush mb-2 text-muted"
                error-class="list-group-item text-danger small "
                class="col"
              />
              <!-- <div class="row mb-3">
              </div> -->
              <FormulateInput
                type="submit"
                label="Sign In"
                input-class="btn btn-dark"
              />
              <small class="form-text text-muted">Didn't have an account? <a class="link-mve" @click.prevent="changePage">Sign up here.</a></small>
            </FormulateForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formValues: {}
    }
  },
  methods: {
    login () {
      let payload = this.formValues
      this.$store.dispatch('login', payload)
    },
    changePage () {
      let page = 'Register'
      this.$router.push({ name: page })
    }
  }
}
</script>

<style scoped>
.err {
  list-style-type: none !important;
  padding: 0;
  margin: 0;
}
</style>