"use client"

import * as React from "react"

import { Button } from "@/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/doc/collapsible"
import { cn } from "@/components/smoothui/utils/cn"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border [&_.border]:border-none",
          className
        )}
        {...props}
      >
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-42")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "from-primary/10 to-primary absolute flex items-end justify-center bg-gradient-to-b p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button
              className="flex w-auto cursor-pointer items-center justify-center"
              variant="outline"
              size="sm"
            >
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}
