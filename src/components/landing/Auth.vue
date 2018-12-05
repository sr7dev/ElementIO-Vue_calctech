<template>
  <b-container class="pt-5 animated fadeIn">
    <b-row class="justify-content-center py-8">
      <b-col md="8" lg="6">
        <b-card-group>
          <b-card no-body class="p-4">
            <b-card-body>
              <b-form>
                <h1>Вход</h1>
                <p class="text-muted font-lg mb-4">войти в свой аккаунт</p>
                <b-input-group size="lg">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="example@mail.com" autocomplete="username email" />
                </b-input-group>
                <b-input-group size="lg" class="mt-3">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-lock"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="Пароль" autocomplete="current-password" />
                </b-input-group>
                <b-row class="mt-4">
                  <b-col cols="12">
                    <b-button size="lg" variant="primary" class="px-4">Войти</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>
