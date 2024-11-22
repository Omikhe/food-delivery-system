'use client';
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login } from "./actions"

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit">
            Login
        </button>
    )
}

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined)
    return (
        <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">

            <form className="flex max-w-[300px] flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <input id="name" name="name" placeholder="Name" />

                </div>

                <div className="flex flex-col gap-2">
                    <input id="email" name="email" placeholder="email" />

                </div>

                <div className="flex flex-col gap-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                    />

                </div>
                <SubmitButton />
            </form>
        </div>
    );
}

