export function passwordValidator(password) {
    if (!password) return "Por favor preencha este campo."
    if (password.length < 8) return 'A senha deve conter 8 caracteres.'
    return ''
  }