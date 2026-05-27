import { useState, useMemo, useEffect, useRef } from "react";
import { supabase, AGENCY_ID } from "../lib/supabase.js";
import { useSupabaseTable } from "../lib/hooks.js";