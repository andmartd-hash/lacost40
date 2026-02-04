def total_service_cost(unit_cost_usd, unit_cost_local, duration, qty, uplf):
    return (unit_cost_usd + unit_cost_local) * duration * qty * uplf
