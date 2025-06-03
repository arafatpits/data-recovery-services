"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function CustomCard({
  title,
  description,
  image,
  imageAlt = "Card image",
  icon: Icon,
  iconSize = "h-12 w-12",
  iconColor = "text-primary",
  buttonText,
  buttonProps = {},
  buttonUrl,
  showButton = true,
  onButtonClick,
  buttonFullWidth = true,
  layoutMode = "stacked", // "stacked" or "inline"
  className = "",
  cardStyle = {},
}) {
  const { backgroundColor, titleColor, descriptionColor } = cardStyle

  // Inline mode only works with icon and has no button
  const isInlineMode = layoutMode === "inline" && Icon
  const shouldShowButton = showButton && buttonText && !isInlineMode

  return (
    <Card
      className={cn(
        "overflow-hidden flex flex-col h-full", // Added h-full for consistent height in grid
        backgroundColor && `bg-[${backgroundColor}]`,
        className
      )}
    >
      {/* Image Section (only in stacked mode) */}
      {image && !isInlineMode && (
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {isInlineMode ? (
          // Inline Layout: Icon + Content side by side
          <div className="flex gap-4">
            <Icon className={cn(iconSize, iconColor, "shrink-0 mt-1")} />
            <div className="flex-1">
              {title && (
                <CardTitle className={cn(titleColor && `text-[${titleColor}]`)}>
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription
                  className={cn(
                    "text-base mt-2",
                    descriptionColor && `text-[${descriptionColor}]`
                  )}
                >
                  {description}
                </CardDescription>
              )}
            </div>
          </div>
        ) : (
          // Stacked Layout: Icon + Content vertically stacked
          <>
            {Icon && (
              <div className="mb-4">
                <Icon className={cn(iconSize, iconColor)} />
              </div>
            )}
            <div className="flex flex-col flex-grow p-4">
              {title && (
                <CardTitle className={cn(titleColor && `text-[${titleColor}]`)}>
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription
                  className={cn(
                    "text-base mt-2 flex-grow", // flex-grow pushes button to bottom
                    descriptionColor && `text-[${descriptionColor}]`
                  )}
                >
                  {description}
                </CardDescription>
              )}
            </div>
          </>
        )}

        {/* Button Section (only in stacked mode) */}
        {shouldShowButton && (
          <div className="mt-6 pt-2"> {/* Added padding-top for better spacing */}
            {buttonUrl ? (
              <Link href={buttonUrl} className="w-full">
                <Button
                  className={cn(buttonFullWidth && "w-full", buttonProps.className)}
                  {...buttonProps}
                >
                  {buttonText}
                </Button>
              </Link>
            ) : (
              <Button
                onClick={onButtonClick}
                className={cn(buttonFullWidth && "w-full", buttonProps.className)}
                {...buttonProps}
              >
                {buttonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}