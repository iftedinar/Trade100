{
  "version": 2,
  "buildCommand": "echo 'No build needed'",
  "outputDirectory": "public",
  "functions": {
    "api/claude.js":   { "memory": 256, "maxDuration": 30 },
    "api/quote.js":    { "memory": 128, "maxDuration": 10 },
    "api/finnhub.js":  { "memory": 128, "maxDuration": 10 }
  },
  "rewrites": [
    { "source": "/api/claude",   "destination": "/api/claude.js"  },
    { "source": "/api/quote",    "destination": "/api/quote.js"   },
    { "source": "/api/finnhub",  "destination": "/api/finnhub.js" },
    { "source": "/(.*)",         "destination": "/index.html"     }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "s-maxage=300, stale-while-revalidate" }
      ]
    }
  ]
}
