import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ChevronsUpDownIcon,
  InboxIcon,
  UserIcon,
} from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { DirectionProvider } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Category } from '@/showcase/types'

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
]

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 173, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
} satisfies ChartConfig

const tags = Array.from({ length: 20 }).map((_, i) => `v1.2.0-beta.${20 - i}`)

export const dataDisplay: Category = {
  id: 'data-display',
  label: 'Data display',
  items: [
    {
      id: 'card',
      name: 'Card',
      description: 'Borderless surface — fill plus soft shadow defines the edge.',
      examples: [
        {
          title: 'Default',
          node: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one click.</CardDescription>
                <CardAction>
                  <Button variant="link">Sign up</Button>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-16px">
                <div className="grid gap-8px">
                  <Label htmlFor="card-name">Name</Label>
                  <Input id="card-name" placeholder="Project name" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          ),
        },
      ],
    },
    {
      id: 'alert',
      name: 'Alert',
      description: 'Quiet, filled callouts in default and destructive variants.',
      examples: [
        {
          title: 'Variants',
          node: (
            <div className="flex w-full max-w-md flex-col gap-12px">
              <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Success! Your changes have been saved.</AlertTitle>
                <AlertDescription>This is an alert with an icon, title and description.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Unable to process your payment.</AlertTitle>
                <AlertDescription>Please verify your billing information and try again.</AlertDescription>
              </Alert>
            </div>
          ),
        },
      ],
    },
    {
      id: 'accordion',
      name: 'Accordion',
      description: 'Expand/collapse with a plus-minus affordance.',
      examples: [
        {
          title: 'Default',
          node: (
            <Accordion type="single" collapsible className="w-[360px]">
              <AccordionItem value="item-1">
                <AccordionTrigger>Insurance operations</AccordionTrigger>
                <AccordionContent>Claims & underwriting, operated — decided in minutes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Healthcare administration</AccordionTrigger>
                <AccordionContent>Member & benefits admin — same-day adjudication.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Regulated onboarding</AccordionTrigger>
                <AccordionContent>KYC & onboarding — approval in the first session.</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ],
    },
    {
      id: 'avatar',
      name: 'Avatar',
      description: 'User image with a text fallback when the image is missing.',
      examples: [
        {
          title: 'Image & fallback',
          node: (
            <div className="flex items-center gap-16px">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="" alt="broken" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
      ],
    },
    {
      id: 'progress',
      name: 'Progress',
      description: 'Determinate progress indicator.',
      examples: [
        {
          title: 'Default',
          node: <Progress value={60} className="w-[320px]" />,
        },
      ],
    },
    {
      id: 'skeleton',
      name: 'Skeleton',
      description: 'Placeholder shimmer for loading content.',
      examples: [
        {
          title: 'Card placeholder',
          node: (
            <div className="flex w-[320px] items-center gap-16px">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex flex-1 flex-col gap-8px">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'spinner',
      name: 'Spinner',
      description: 'Indeterminate loading indicator.',
      examples: [
        {
          title: 'Sizes & in button',
          node: (
            <div className="flex items-center gap-16px">
              <Spinner className="size-4" />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
              <Button disabled>
                <Spinner />
                Loading
              </Button>
            </div>
          ),
        },
      ],
    },
    {
      id: 'table',
      name: 'Table',
      description: 'Borderless container with a hairline row rhythm.',
      examples: [
        {
          title: 'Default',
          node: (
            <Table className="w-full max-w-xl">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((row) => (
                  <TableRow key={row.invoice}>
                    <TableCell className="font-medium">{row.invoice}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.method}</TableCell>
                    <TableCell className="text-right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ),
        },
      ],
    },
    {
      id: 'separator',
      name: 'Separator',
      description: 'A thin divider, horizontal or vertical.',
      examples: [
        {
          title: 'Horizontal & vertical',
          node: (
            <div className="w-[320px]">
              <div className="text-body-sm">Antino Design System</div>
              <Separator className="my-12px" />
              <div className="flex h-6 items-center gap-12px text-body-sm">
                <span>Docs</span>
                <Separator orientation="vertical" />
                <span>Components</span>
                <Separator orientation="vertical" />
                <span>Registry</span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'scroll-area',
      name: 'Scroll area',
      description: 'Cross-browser custom scrollbar around overflowing content.',
      examples: [
        {
          title: 'Vertical list',
          node: (
            <ScrollArea className="h-60 w-48 rounded-md border border-border">
              <div className="p-16px">
                <h4 className="mb-16px text-body-sm font-medium">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-body-sm">{tag}</div>
                    <Separator className="my-8px" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
        },
      ],
    },
    {
      id: 'aspect-ratio',
      name: 'Aspect ratio',
      description: 'Constrains content to a fixed width/height ratio.',
      examples: [
        {
          title: '16:9',
          node: (
            <div className="w-[400px]">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
                  alt="Landscape"
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>
          ),
        },
      ],
    },
    {
      id: 'carousel',
      name: 'Carousel',
      description: 'Swipeable/embla-driven content slider with prev/next controls.',
      examples: [
        {
          title: 'Default',
          node: (
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-24px">
                        <span className="text-h1 font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ),
        },
      ],
    },
    {
      id: 'chart',
      name: 'Chart',
      description: 'Recharts wrapper themed with chart tokens, tooltips, and legends.',
      examples: [
        {
          title: 'Bar chart',
          node: (
            <ChartContainer config={chartConfig} className="h-[300px] w-full max-w-xl">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          ),
        },
      ],
    },
    {
      id: 'empty',
      name: 'Empty',
      description: 'Empty-state placeholder with media, title, description, and action.',
      examples: [
        {
          title: 'Default',
          node: (
            <Empty className="w-[400px] border">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <InboxIcon />
                </EmptyMedia>
                <EmptyTitle>No messages</EmptyTitle>
                <EmptyDescription>You're all caught up. New messages will appear here.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="sm">Refresh</Button>
              </EmptyContent>
            </Empty>
          ),
        },
      ],
    },
    {
      id: 'item',
      name: 'Item',
      description: 'A list row primitive with media, content, and actions.',
      examples: [
        {
          title: 'Default',
          node: (
            <div className="w-[420px]">
              <ItemGroup>
                <Item variant="outline">
                  <ItemMedia variant="icon">
                    <UserIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Profile</ItemTitle>
                    <ItemDescription>Manage your account settings and preferences.</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="sm" variant="ghost">
                      Edit
                    </Button>
                  </ItemActions>
                </Item>
              </ItemGroup>
            </div>
          ),
        },
      ],
    },
    {
      id: 'collapsible',
      name: 'Collapsible',
      description: 'Expand/collapse a region of content.',
      examples: [
        {
          title: 'Default',
          node: (
            <Collapsible className="flex w-[360px] flex-col gap-8px">
              <div className="flex items-center justify-between gap-16px rounded-lg border border-border px-16px py-8px">
                <span className="text-body-sm font-medium">@antino starred 3 repositories</span>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ChevronsUpDownIcon />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="flex flex-col gap-8px">
                <div className="rounded-lg border border-border px-16px py-8px text-body-sm">
                  @antino/design-system
                </div>
                <div className="rounded-lg border border-border px-16px py-8px text-body-sm">@antino/ui</div>
              </CollapsibleContent>
            </Collapsible>
          ),
        },
      ],
    },
    {
      id: 'resizable',
      name: 'Resizable',
      description: 'Draggable, resizable panel groups.',
      examples: [
        {
          title: 'Horizontal',
          node: (
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-[200px] max-w-md rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-24px text-body-sm">One</div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-24px text-body-sm">Two</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
        },
      ],
    },
    {
      id: 'direction',
      name: 'Direction',
      description: 'Sets the reading direction (LTR/RTL) for descendant components.',
      examples: [
        {
          title: 'LTR & RTL',
          node: (
            <div className="flex flex-wrap gap-16px">
              <DirectionProvider dir="ltr">
                <div dir="ltr" className="flex gap-8px rounded-lg border border-border p-16px">
                  <Button>First</Button>
                  <Button variant="outline">Second</Button>
                </div>
              </DirectionProvider>
              <DirectionProvider dir="rtl">
                <div dir="rtl" className="flex gap-8px rounded-lg border border-border p-16px">
                  <Button>الأول</Button>
                  <Button variant="outline">الثاني</Button>
                </div>
              </DirectionProvider>
            </div>
          ),
        },
      ],
    },
  ],
}
