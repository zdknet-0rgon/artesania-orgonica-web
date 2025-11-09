import { useForm } from 'react-hook-form';
// Solución: update package.json para react-hook-form versión v7+
// Si falla, probar: import useForm from 'react-hook-form';

export default function LoginForm() {
    const form = useForm(); // Usa el hook correctamente según doc
    // ...resto del código original
}