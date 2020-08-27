<template>
  <div>

    <!-- register -->
    <div class="container">
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col-6">
          <div class="card p-4">
            <FormulateForm
              class="p4"
              v-model="formValues"
              @submit="register"
            >
              <h2 class="card-title text-center">Register</h2>
              <FormulateInput
                name="name"
                type="text"
                label="Name"
                placeholder="First name and last name"
                validation="required"
                input-class="form-control"
                label-class="form-label"
                outer-class="mb-3"
                errors-class="list-group list-group-flush mb-3 text-muted"
                error-class="list-group-item text-danger small "
              />
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
              <div class="row mb-3">
                <FormulateInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  help="Password must be 6 to 12 characters."
                  validation="required|max:12|min:6"
                  help-class="small text-muted"
                  input-class="form-control"
                  label-class="form-label"
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
                  errors-class="list-group list-group-flush mb-2 text-muted"
                  error-class="list-group-item text-danger small "
                  class="col"
                />
              </div>
              <FormulateInput
                type="submit"
                label="Sign Up"
                input-class="btn btn-primary"
              />
              <small class="form-text text-muted">Already have an account? <a class="" @click.prevent="changePage">Sign in here.</a></small>
            </FormulateForm>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      formValues: {}
    }
  },
  methods: {
    register () {
      let payload = this.formValues
      this.$store.dispatch('register', payload)
    },
    changePage () {
      let page = 'Login'
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
