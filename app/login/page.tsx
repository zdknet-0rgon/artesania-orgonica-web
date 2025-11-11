"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: 'Introduce un email válido.' }),
  password: z.string().min(6, { message: 'Mínimo 6 caracteres.' })
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoginError(null);
    await new Promise(r => setTimeout(r, 800));
    if (data.email === 'demo@orgonica.com' && data.password === 'demo123') {
      alert(`Login correcto para: ${data.email}`);
    } else {
      setLoginError('Credenciales incorrectas. Intenta nuevamente o solicita acceso.');
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '60px auto', background: '#fafafa', padding: 28, borderRadius: 12, boxShadow: '0 2px 16px rgba(20,30,60,0.09)' }}>
      <h2 style={{ fontWeight: 'bold', color: '#27408b', fontSize: 28, marginBottom: 18 }}>Acceso a tu cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccd'}} />
        {errors.email && <span style={{ color: '#c11', fontSize: 14 }}>{errors.email.message}</span>}
        <label htmlFor="password" style={{ marginTop: 16, display: 'block' }}>Contraseña</label>
        <div style={{ width: '100%', position: 'relative' }}>
          <input type={showPassword ? 'text' : 'password'} {...register('password')} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccd' }} />
          <button type="button" tabIndex={-1} style={{ position: 'absolute', right: 8, top: 8, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14 }} onClick={() => setShowPassword(v => !v)}>
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        {errors.password && <span style={{ color: '#c11', fontSize: 14 }}>{errors.password.message}</span>}
        {loginError && <div style={{ color: '#c11', fontWeight: 'bold', marginTop: 15, fontSize: 15 }}>{loginError}</div>}
        <button disabled={isSubmitting || !!loginError} type="submit" style={{ width: '100%', padding: 12, marginTop: 24, background: '#27408b', color: '#fff', borderRadius: 8, fontWeight: 'bold', fontSize: 16, cursor: isSubmitting ? 'wait' : 'pointer' }}>Entrar</button>
      </form>
    </div>
  )
}
