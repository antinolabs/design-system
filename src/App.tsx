import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-32px">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-8px">
            <CardTitle>Antino Design System</CardTitle>
            <Badge variant="secondary">v0.0.0</Badge>
          </div>
          <CardDescription>
            A shadcn/ui based component library. Run Storybook to browse and develop
            components in isolation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-12px">
          <Button asChild>
            <a href="https://storybook.js.org" target="_blank" rel="noreferrer">
              Open Storybook
            </a>
          </Button>
          <Button variant="outline">Get started</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
