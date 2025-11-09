import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Introduce un email válido.' }),
  password: z.string().min(6, { message: 'Mínimo 6 caracteres.' })
});

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    // Aquí se implementa lógica de login/API
    alert(`Login correcto para: ${data.email}`);
  };

  return (
    <div style={{ maxWidth: 420, margin: '60px auto', background: '#fafafa', padding: 28, borderRadius: 12, boxShadow: '0 2px 16px rgba(20,30,60,0.08)' }}>
      <h2 style={{ fontWeight: 'bold', color: '#27408b', fontSize: 28, marginBottom: 18 }}>Acceso a tu cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} style={{   width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccd'}} />
        {errors.email && <span style={{ color: '#c11', fontSize: 14 }}>{errors.email.message}</span>}
        <label htmlFor="password" style={{ marginTop: 16, display: 'block' }}>Contraseña</label>
        <input type="password" {...register('password')} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccd' }} />
        {errors.password && <span style={{ color: '#c11', fontSize: 14 }}>{errors.password.message}</span>}
        <button disabled={isSubmitting} type="submit" style={{ width: '100%', padding: 12, marginTop: 24, background: '#27408b', color: '#fff', borderRadius: 8, fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}>Entrar</button>
      </form>
    </div>
  )
}
