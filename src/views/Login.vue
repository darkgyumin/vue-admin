<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <b-row class="justify-content-center">
                <b-col md="5">
                    <b-card-group>
                        <b-card no-body class="p-4">
                            <b-card-body>
                                <b-form @submit.prevent="submit">
                                    <h1>Login</h1>
                                    <p class="text-muted">다솜정보 알림톡</p>
                                    <b-input-group class="mb-3">

                                        <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                                        <b-form-input type="text"
                                                      name="id"
                                                      v-model="$v.form.$model.id"
                                                      :state="!$v.form.id.$invalid"
                                                      class="form-control" placeholder="userid"
                                                      autocomplete="off"
                                            />
                                        <b-form-invalid-feedback v-if="!$v.form.id.required">
                                            사용자 아이디를 입력하세요.
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback v-if="!$v.form.id.minLength">
                                            사용자 아이디는 최소 4자 이상입니다.
                                        </b-form-invalid-feedback>

                                    </b-input-group>

                                    <b-input-group class="mb-4">

                                        <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                                        <b-form-input type="password"
                                                      name="password"
                                                      v-model="$v.form.$model.password"
                                                      :state="!$v.form.password.$invalid"
                                                      class="form-control" placeholder="password"
                                                      autocomplete="off"
                                        />
                                        <b-form-invalid-feedback v-if="!$v.form.password.required">
                                            비밀번호를 입력하세요.
                                        </b-form-invalid-feedback>

                                    </b-input-group>
                                    <b-row>
                                        <b-col cols="6">
                                            <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                                        </b-col>
                                        <!--b-col cols="6" class="text-right">
                                            <b-button variant="link" class="px-0">Forgot password?</b-button>
                                        </b-col-->
                                    </b-row>
                                </b-form>
                            </b-card-body>
                        </b-card>
                        <!--b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
                            <b-card-body class="text-center">
                                <div>
                                    <h2>Sign up</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                                </div>
                            </b-card-body>
                        </b-card-->
                    </b-card-group>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import { validationMixin } from "vuelidate"
    import { required, minLength } from "vuelidate/lib/validators"

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    id: '',
                    password: ''
                }
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            form: {
                id: {
                    required,
                    minLength: minLength(4)
                },
                password: {
                    required
                }
            }
        },
        methods: {
            submit() {
                console.log('test');
            }
        }
    }
</script>
