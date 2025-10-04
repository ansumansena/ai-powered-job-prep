"use client"

import { useTheme } from "next-themes"
import { Button } from "./button"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "./dropdown-menu"    
import { Sun, Moon, Laptop } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { th } from "zod/v4/locales"

const themes = [
	{ value: "light", label: "Light", icon: Sun },
	{ value: "dark", label: "Dark", icon: Moon },
	{ value: "system", label: "System", icon: Laptop },
] as const

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }   

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" >
					{theme === "light" ? <Sun /> : theme === "dark" ? <Moon /> : <Laptop />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
					{themes.map(({ value, label, icon: Icon }) => (
						<DropdownMenuRadioItem key={value} value={value} className={cn("cursor-pointer", theme === value && "bg-accent text-accent-foreground")}>
							<Icon className="size-4" />
							{label}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
