import prometheus from "prom-client";

const collectDefaultMetrics = prometheus.collectDefaultMetrics;
export const register = prometheus.register;
collectDefaultMetrics({ register });

export const request_total_counter = new prometheus.Counter({
  name: "request_total",
  help: "Contador de Requisições",
  labelNames: ["method", "statusCode"],
});

export const request_time_histogram = new prometheus.Histogram({
  name: "example_request_time_seconds",
  help: "Tempo de Resposta das Requisições",
  buckets: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
});

export const request_time_summary = new prometheus.Summary({
  name: "example_summary_request_time_seconds",
  help: "Tempo de Resposta das Requisições",
  percentiles: [0.01, 0.05, 0.5, 0.9, 0.95, 0.99, 0.999],
});
