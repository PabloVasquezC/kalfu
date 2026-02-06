'use server'

interface ContactFormData {
    nombre: string
    correo: string
    celular: string
    mensaje: string
}

interface State {
    success: boolean
    message: string
    errors?: Record<string, string[]>
}

export async function submitContactForm(prevState: State | null, formData: FormData): Promise<State> {
    const rawData: ContactFormData = {
        nombre: formData.get('nombre') as string,
        correo: formData.get('correo') as string,
        celular: formData.get('celular') as string,
        mensaje: formData.get('mensaje') as string,
    }

    // Basic validation
    const errors: Record<string, string[]> = {}
    if (!rawData.nombre) errors.nombre = ['El nombre es obligatorio']
    if (!rawData.correo) errors.correo = ['El correo es obligatorio']
    if (!rawData.celular) errors.celular = ['El celular es obligatorio']
    if (!rawData.mensaje) errors.mensaje = ['El mensaje es obligatorio']

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: 'Por favor corrija los errores en el formulario',
            errors
        }
    }

    try {
        const response = await fetch('https://n8n.fluxia.cl/webhook/55128e67-2bd9-4a5b-b8b5-44df58482c84', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawData),
        })

        if (!response.ok) {
            throw new Error('Error al enviar el formulario')
        }

        return {
            success: true,
            message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        }
    } catch (error) {
        console.error('Error submitting form:', error)
        return {
            success: false,
            message: 'Hubo un error al enviar el mensaje. Por favor intente nuevamente.'
        }
    }
}
