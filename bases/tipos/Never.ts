const errorMessage = (message: string):never => {
    throw new Error(message)
} 

const errorLLamada = errorMessage("problemas al ingresar usuario")


