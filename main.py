from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from .api.routes import router as api_router
from .core.logging_config import configure_logging
from .config.settings import settings
import logging

# ---- Logging ----
configure_logging()
log = logging.getLogger(__name__)

app = FastAPI(
    title="Hin API",
    version="1.0.0",
    contact={"name": "Hin", "url": "https://example.com"},
)



# ---- CORS ----
default_dev_origins = {
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
}
origins = set(default_dev_origins)
if settings.FRONTEND_URL:
    origins.add(settings.FRONTEND_URL)

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(origins),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Root & Health ----
@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse(url="/docs")

@app.get("/health", tags=["default"])
def health():
    return {"status": "ok"}

# ---- API Routers ----
app.include_router(api_router, prefix=settings.API_PREFIX)

log.info("API_PREFIX=%s | FRONTEND_URL=%s", settings.API_PREFIX, settings.FRONTEND_URL)
